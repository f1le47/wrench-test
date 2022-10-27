import { ISelectFromLink } from "./ISelectFromLink";

function selectLinkFromText({text}: ISelectFromLink) {
  const openingParenthesis = text.split('').findIndex((sym) => sym === '(')
  const closingParenthesis = text.split('').findIndex((sym) => sym === ')')
  const openingSquareBracket = text.split('').findIndex((sym) => sym === '[')
  const closingSquareBracket = text.split('').findIndex((sym) => sym === ']')

  const punctuationMarks = /(\.|,|!|;|:|\?)$/

  const link = text.slice(openingParenthesis + 1, closingParenthesis)
  const linkText = text.slice(openingSquareBracket + 1, closingSquareBracket).replace('_', ' ')

  const mark = punctuationMarks.test(link[link.length - 1]) ? link[link.length - 1] : false

  return {link, linkText, mark}
}

export default selectLinkFromText