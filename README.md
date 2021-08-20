# 探索 Minio

## 使用预签名（presigned）方式上传文件

使用预签名 URLs（pre-signed URLs），客户端（Web 前端）可以直接向 S3 兼容的云存储服务器上传文件，且无需向用户暴露 S3 凭证。

`example1` 演示了：后端服务使用 `presignedPutObject` 可以生成预签名 URL，前端应用调用该服务，是使用预签名 URL 上传文件。

