import React from 'react';
import Link from "../Atoms/Link";

function Home() {
    return (
        <div>
            <Link href={"/login"}>Login ?</Link>
            <Link href={"/register"}>Register ?</Link>
        </div>
    );
}

export default Home;