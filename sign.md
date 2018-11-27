#生成签名密钥
> keytool -genkey -v -keystore mark.keystore -alias mark.keystore -keyalg RSA -validity 20000
#生成签名文件
> jarsigner -verbose -keystore mark.keystore -signedjar complete.apk app.apk mark.keystore
