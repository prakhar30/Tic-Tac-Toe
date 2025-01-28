run:
	npm run dev

proto:
	rm -f src/generated/*.js
	rm -f src/generated/*.ts 
	protoc -I=src/protos src/protos/*.proto \
     --js_out=import_style=commonjs:src/generated \
     --grpc-web_out=import_style=typescript,mode=grpcwebtext:src/generated

.PHONY: run proto dockerenvoy