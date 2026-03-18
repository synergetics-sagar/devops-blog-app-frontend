export const apiIp = "localhost"
export const apiPort = 8888
export const baseUrl = `http://${apiIp}:${apiPort}`
export const postsUrl = `${baseUrl}/posts`
export const articleUrl = (pid)=>`${postsUrl}/${pid}`