class EloUtil{
    static expected(rating, ratingopponent){
        var qa = _q(rating)
        var qb = _q(ratingopponent)
        return qa / (qa + qb)
    }

    static _q(rating){
        return Math.pow(10,(rating/400))
    }

    static _newRating(rating, expectedrating, actualrating, k){
        return rating + k * (actualrating - expectedrating)
    }

    static calcNewRating(rating, ratingopponent, result){
        var expected = expected(rating, ratingopponent)
        var k = 32
        return _newRating(rating, expected, result, k)
    }
}

module.exports = EloUtil
