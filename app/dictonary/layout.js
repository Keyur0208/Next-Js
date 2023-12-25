export default function layout({children,team,analytics}){

    return(
        <main>
            <div>{children}</div>
            <div>{team}</div>
            <div>{analytics}</div>
        </main>
    )
}