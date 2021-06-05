module.exports = {
    normal:{
        SecretId: 'SECRETID',
        SecretKey: 'SECRETKEY'
    },
    getAuthorization:{},
    sts:{
        credential: {
            secretId: "SecretId",
            secretKey: "SecretKey",
        },
        region: "ap-guangzhou",
        profile: {
            httpProfile: {
                endpoint: "sts.tencentcloudapi.com",
            },
        },
    }
}