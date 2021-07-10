class Player{
    constructor(){
        this.name=null;
        this.distance=0;
        this.index=null;
    }
    getPlayer(){
        var  getPlayerRef = database.ref('playerCount') 
        getPlayerRef.on("value",(data)=>{
        playerCount=data.val();
        });
    }
    updateplayer(count)
    {
        database.ref('/').update({
            playerCount : count
        });
    }
    update()
    {
        var playerIndex = "players/player" +this.index;
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        })
    }
    static getplayerinfo () 
    {
        var playerInfoRef = database.ref('players')
        playerInfoRef.on("value",(data)=>{
            allPlayer = data.val();
        });
    }
}