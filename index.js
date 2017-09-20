class EloUtil {
  static expected (rating, ratingopponent) {
    var qa = this._q(rating)
    var qb = this._q(ratingopponent)
    return qa / (qa + qb)
  }

  static _q (rating) {
    return Math.pow(10, (rating / 400))
  }

  static _newRating (rating, expectedrating, actualrating, k) {
    return rating + k * (actualrating - expectedrating)
  }

  static _calcNewRating (rating, ratingopponent, result) {
    var expected = this.expected(rating, ratingopponent)
    var k = 64
    var rate = this._newRating(rating, expected, result, k)
    return rate ? rate : 0
  }

  static win (rating, ratingopponent) {
    return this._calcNewRating(rating, ratingopponent, 1)
  }

  static lose (rating, ratingopponent) {
    return this._calcNewRating(rating, ratingopponent, 0)
  }
}

module.exports = EloUtil
