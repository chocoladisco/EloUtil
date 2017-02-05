class EloUtil{
    static expected(rating, ratingopponent){
        var qa = this._q(rating)
        var qb = this._q(ratingopponent)
        return qa / (qa + qb)
    }

    static _q(rating){
        return Math.pow(10,(rating/400))
    }

    static _newRating(rating, expectedrating, actualrating, k){
        return rating + k * (actualrating - expectedrating)
    }

    static calcNewRating(rating, ratingopponent, result){
        var expected = this.expected(rating, ratingopponent)
        var k = 32
        var result = this._newRating(rating, expected, result, k)
        if (result < 0) {
            return 0
        }
        return Math.round(result)
    }
}

module.exports = EloUtil
