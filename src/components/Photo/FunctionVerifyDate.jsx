export const FunctionVerifyDate = (data) => {
  const dataComment = new Date(data.comment_date)
  const dataNow = new Date(Date.now())
  const dataResult = dataNow - dataComment

  if (dataResult > 172800000) {
    const dia = dataComment.getDate().toString().padStart(2, '0')
    const mes = String(dataComment.getMonth() + 1).padStart(2, '0')
    const ano = dataComment.getFullYear()
    return `${dia} / ${mes} / ${ano}`

  } else if (dataResult < 172800000 && dataResult > 86400000) {
    return 'ontem'

  } else if (dataResult < 86400000 && dataResult > 3600000) {
    const finalResult = dataResult / 1000 / 60 / 60
    return String(Math.floor(finalResult)) + ' h'

  } else if (dataResult < 3600000) {
    const finalResult = dataResult / 1000 / 60
    return String(Math.floor(finalResult)) + ' min'
  } else return null
}
