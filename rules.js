module.exports = {
    credential: {
        SecretId: 'SECRETID',
        SecretKey: 'SECRETKEY'
    },
    sts: {
        clientConfig: {
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
        },
        Name:'',
        Policy:{
            
        }
    }
}