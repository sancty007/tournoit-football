
type contentType={
    image:string,
    titre:string,
    content:string
    btitre:string

}

export const Controller = ({image,titre,content,btitre}: contentType) => {
    return (
        <div className="ml-[11%] mt-[10%]">
            <div className="flex flex-col gap-2 justify-center items-center">
                <img src={image} alt="" className="w-24 h-24" />
                <h2 className="text-black ">{titre}</h2>
                <p className="text-black font-thin">{content} </p>
                <button className="bg-blue-500/25 rounded-lg p-3 ">{btitre}</button>

            </div>
            
        </div>
    )
}
