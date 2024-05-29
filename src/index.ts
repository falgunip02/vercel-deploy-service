import { commandOptions, createClient } from "redis";
const subscriber = createClient();
subscriber.connect();   //locally running 


async function main(){
    while(1) {
        const response = await subscriber.brPop(
            commandOptions({isolated : true }),
            'build-queue',
            0
        );
        console.log(response);
    }
}
main();