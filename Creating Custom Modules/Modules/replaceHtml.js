module.exports = function replaceHTMl(page , data){
    let output = page.replace("{{%IMAGE%}}" , data.image)
    output = output.replace("{{%NAME%}}" , data.title)
    output = output.replace("{{%DISC%}}" , data.description)
    output = output.replace("{{%PRICE%}}" , data.price)
    output = output.replace("{{%ID%}}" , data.id)

    return output
}