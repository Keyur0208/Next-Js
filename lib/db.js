const {username,passoword} = process.env;

export const connectionSrt = "mongodb+srv://"+username+":"+passoword+"@cluster0.4brsisv.mongodb.net/productdb?retryWrites=true&w=majority"
