async function getGPS() {
    const firebaseAdmin = require('firebase-admin');

    //const serviceAccount = require('./myapp-1f07f-firebase-adminsdk-k9w2m-327ceea122.json');

    firebaseAdmin.initializeApp({
        credential: firebaseAdmin.credential.cert({
            "type": "service_account",
            "project_id": "myapp-1f07f",
            "private_key_id": "327ceea122756ce0ce86bcc147502f5b96d39c11",
            "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDOYLIMlOvcdEAJ\nhk9FZtwSKJmUR8P7d9UUXTywiHSbq6kd8UBPZpEqja6GdVWgVDV1oQypPOdYewNi\nX1bWjW0a+wSC/NC9Ro/RgFbvf76Xclwig3BuUTfG2F8c75KF1QhQ6vBF+/mzOG4c\nJgzoeB0ByqZQXVb/dFWO9Ke7VfUU3k6koL9ky6Lkgn87/x813TExZzFFWPwtPWFO\n++v2NLaVAIT+dNFno3+sQnAuH0ivVkfWA9H6Dj3lX1DMVql5tReglG3IVETVhcqa\n9rE1ZEPqCNduI7T0tXVH8Fnfz51OjYHwMzE5KiB0KDvAabSL0mBQJ0Z+E6frWKij\ngou6ZmL3AgMBAAECggEADvjX4e7J36/1V1uNk7DfJVgZsDa2op8yb6xF816q6wI8\nniX67ue3f1lRAIMxp5SEXljFNN/svrAJ8lCNWbpf4HW2gZQ6xoiAdYf0hqKDXrRW\nt9BGT1KIE95tpAlDXX8zf79TmBgsKNLeth8Sj6jrHc6oWysyXQ0BCgJ4yq/1PEK1\nIwlyIJuyaTXciLZOj3J5SbyKH7BcP3bIsTEWyYE+k7JlL7kqc0/AImWfwstE+8SS\nodcthSEax/2f8AaF9KjDVqlxP5pe29+3K5yZPEiB0FLdsHG9Vjde+otgMAgJbQmw\nR31ERpPMs5gJa8sTJCd5FX86XwXQQuQJLe23vYdbpQKBgQDmdqwhdwbz9ajOFjR8\nn+BKCZagaC7UUCf/y+l7TH4yyNlOJ+MapVKoaITDUhpp5aY9wk5yky05DMrV+vcM\nw+syMkzZAGQk+U+TgqnxFkBaPXfsYtoFy1h2jWueKAWsvKk0jjoHAVrJFtpZ08Lu\ngyIAl2eoX7OGAc7S2Q7oYkffiwKBgQDlPs3eFKcmJeQSFtvFCD4RcD5qI1LrN9Xd\nI3UVOzJuiEjfcYMxk+so8Abk6kk1vlLXXGF93GLeLlutsS1SuBCzafvhuKPUd0Az\nanpPfKdd9W8ToCSEVM3QZo6Z4dQlOZvdiipIdawcyclYaqxE54Pb97qXIeRwKcIL\nUDtjokG3xQKBgQDRy/5uiHhf5aZB1Zz6RmBbhdcFN1JKHJ4NEof9omjPul938n+f\nZhiVDnCtjjRVaqWnWxcm3iww3yBXIxt7F28oRvoGIYEI15xFYJFr0yHKBGMDYgmv\ndKmXYq4xT6W61hQCr+bLMcR/grpLQ6cUkXOGrk3CzTwUJdktwEL98VoUeQKBgQDR\nVcFdy1Q7BJy4XAFBcd5jxDBqcWk1e54iOk+fHJhX0MFisOARNLangk95V+uUVQCG\nwkgQS2BI7OIwwLrXb1dozh4BJ78Ks/5/NPsNfJHEves5a6IM6PesFwqewFYdy/Zl\nndYwpquM+kKPJ5G5tgN1qUjM21kjhy43cINa3v7N1QKBgQDTkP+BGowLK89/QxWw\n2ANIp6wdL5qiuQUxvmVYqS8PjI/on8ltVh1ySDslBOyxgSTTA5mwVlvf/aKhNMp5\nc/HI3cTLO2hlUTnt9/0ijmFqtnwWfvqFZ0/TkOzoiUzMmJWuFcqH94H1b2MhamCk\nKtXLt3IrXO2qQJkQA/dc2O0PVw==\n-----END PRIVATE KEY-----\n",
            "client_email": "firebase-adminsdk-k9w2m@myapp-1f07f.iam.gserviceaccount.com",
            "client_id": "115246847845334808792",
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-k9w2m%40myapp-1f07f.iam.gserviceaccount.com",
            "universe_domain": "googleapis.com"
        }),
        databaseURL: 'https://myapp-1f07f-default-rtdb.asia-southeast1.firebasedatabase.app/'
    });

    // Lấy tham chiếu đến nút dữ liệu bạn muốn truy xuất
    const ref = firebaseAdmin.database().ref('/');

    // Truy xuất và hiển thị dữ liệu
    ref.once('value', (snapshot) => {
        const data = snapshot.val();
        console.log(data);
    });
}

getGPS()