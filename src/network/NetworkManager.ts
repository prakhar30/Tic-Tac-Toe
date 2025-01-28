// src/network/NetworkManager.ts

import { grpc } from '@improbable-eng/grpc-web';
import { LoginUserRequest, LoginUserResponse } from '../generated/rpc_login_user_pb';
import { CreateUserRequest, CreateUserResponse } from '../generated/rpc_create_user_pb';
import { TicTacToeClient } from '../generated/Tic_tac_toeServiceClientPb';

const SERVER_URL = 'http://localhost:8080'; // Placeholder URL

class NetworkManager {
  static login(username: string, password: string): Promise<LoginUserResponse> {
    return new Promise((resolve, reject) => {
      const request = new LoginUserRequest();
      request.setUsername(username);
      request.setPassword(password);

      const client = new TicTacToeClient(SERVER_URL);
      client.loginUser(request, {}, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      });
    });
  }

  static register(username: string, password: string): Promise<CreateUserResponse> {
    return new Promise((resolve, reject) => {
      const request = new CreateUserRequest();
      request.setUsername(username);
      request.setPassword(password);

      const client = new TicTacToeClient(SERVER_URL);
      client.createUser(request, {}, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      });
    });
  }

  static getAuthMetadata() {
    const token = localStorage.getItem('accessToken');
    return token ? { Authorization: `Bearer ${token}` } : {};
  }
}

export default NetworkManager;