interface GameError {
  code: string;
  message: string;
}

interface WebSocketMessage {
  type: 'create_game' | 'join_game' | 'make_move' | 'game_state';
  gameId: string;
  data?: any;
  error?: GameError;
}

interface GameState {
  board: string[];
  players: { [key: string]: string };
  turn: string;
  winner: string;
  gameOver: boolean;
  gameReady: boolean;
}

class WebSocketService {
  private ws: WebSocket | null = null;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;
  private reconnectTimeout = 3000; // 3 seconds

  constructor(private token: string) {}

  connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        // Include token in the URL for authentication
        const wsUrl = `ws://localhost:9092/ws?token=${encodeURIComponent(this.token)}`;
        this.ws = new WebSocket(wsUrl);

        this.ws.onopen = () => {
          console.log('WebSocket connected');
          this.reconnectAttempts = 0;
          resolve();
        };

        this.ws.onclose = () => {
          console.log('WebSocket disconnected');
          this.handleReconnect();
        };

        this.ws.onerror = (error) => {
          console.error('WebSocket error:', error);
          reject(error);
        };
      } catch (error) {
        reject(error);
      }
    });
  }

  private handleReconnect() {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      this.reconnectAttempts++;
      console.log(`Attempting to reconnect (${this.reconnectAttempts}/${this.maxReconnectAttempts})...`);
      
      setTimeout(() => {
        this.connect().catch(console.error);
      }, this.reconnectTimeout);
    }
  }

  send(message: WebSocketMessage) {
    if (this.ws?.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(message));
    } else {
      console.error('WebSocket is not connected');
    }
  }

  onMessage(callback: (message: WebSocketMessage) => void) {
    if (this.ws) {
      this.ws.onmessage = (event) => {
        console.log('Raw WebSocket message:', event.data);
        try {
          const message = JSON.parse(event.data);
          console.log('Parsed WebSocket message:', message);
          callback(message);
        } catch (error) {
          console.error('Error parsing WebSocket message:', error);
        }
      };
    }
  }

  disconnect() {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
  }
}

export default WebSocketService; 