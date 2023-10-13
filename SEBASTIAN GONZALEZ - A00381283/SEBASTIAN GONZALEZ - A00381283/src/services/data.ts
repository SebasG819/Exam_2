export async function Data() {
    try{

        const data = await fetch ('https://catfact.ninja/fact').then(res => res.json())
        console.log(data)
        return data;

    } catch (error){
        console.error(error);
    }
    
}

export async function Getimg () {
    try{

        const Dataimg = await fetch ('https://cataas.com/card').then(res => res.json())
        console.log(Dataimg)
        return Dataimg;

    } catch (error){
        console.error(error);
    }
    
}