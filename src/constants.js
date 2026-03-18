export const apiIp = "13.205.18.198"
export const apiPort = 80
export const baseUrl = `http://${apiIp}:${apiPort}`
export const postsUrl = `${baseUrl}/posts`
export const articleUrl = (pid)=>`${postsUrl}/${pid}`