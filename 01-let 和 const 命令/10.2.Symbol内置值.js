class Person{
    static [Symbol.hasInstance](param){
        console.log(param)
        console.log('我是来被监测的')
        return false;
    }
}