export class Resultat{
    public constructor(
        public personne: string, 
        public teitrong:Int16Array, 
        public abdo: Int16Array, 
        public planche:Int16Array, 
        public mattrong:Int16Array, 
        public burpee:Int16Array
    ){}
}