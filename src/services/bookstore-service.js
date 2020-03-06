export default class BookstoreService {

   data = [
        {   
            id:1,
            title: 'Production-Ready Microservices',
            author: 'Susan J.Fowler',
            price: 32,
            coverImage:'https://images.ua.prom.st/1082045423_w640_h640_production-ready-microservices-building.jpg'
        },
        {   
            id:2,
            title: 'Release it!',
            author: 'Michael T.Nygard',
            price: 45,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41nMZPJdhsL._SX415_BO1,204,203,200_.jpg'
        }
    ];

    getBooks(){
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.data) 
            }, 700);
        });
    }
}