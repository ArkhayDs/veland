import React from 'react';
import Link from "../Atoms/Link";

function Home() {
    return (
        <div>
            <Link href={"/login"} content={"login ?"}/>
            <Link href={"/register"} content={"register ?"}/>
        </div>
    );
}

export default Home;