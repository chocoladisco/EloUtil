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
}

module.exports = EloUtil
