exports.handler = async function () {
  const { NAME } = process.env

  // debugging
  console.log(process.env.NAME)
  console.log(process.env.CONTEXT)
  return {
    statusCode: 200,
    body: `Hello ${NAME}`,
  }
}
