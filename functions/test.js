exports.handler = async function () {
  const { NAME } = process.env
  return {
    statusCode: 200,
    body: `Hello ${NAME}`,
  }
}
