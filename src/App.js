import React from "react";
import './App.css';
import Button from "./componenten/Button";

function App() {
    return (
        <>
            <body>
            <header>
                <nav>
                    <Button text="Sign in"/>
                    <Button text="Login"/>
                    <Button text="Contact"/>
                </nav>
            </header>
        <div className="container1">
            <aside>
                <Button text={"Profile"}/>
                <Button text={"Drop Demo"}/>
                <Button text={"Demo"}/>
            </aside>

            <main>
                <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam beatae commodi consequatur culpa delectus deserunt dolorum fugit, hic id ipsum iste magnam maxime mollitia necessitatibus nesciunt nostrum obcaecati quae quaerat quas reiciendis repellat saepe suscipit voluptates. Doloribus illo in labore minus odio quaerat quos reiciendis ut. Beatae cupiditate debitis delectus dolore eaque expedita facilis illo illum impedit, inventore ipsam iste, itaque laboriosam magni molestias nihil pariatur perferendis unde voluptas, voluptatibus. Alias at dicta doloribus nemo, nihil nostrum odio repellat sequi tempora voluptatibus. Alias aliquam architecto asperiores, autem eum harum illum itaque iusto nam numquam obcaecati pariatur perspiciatis porro provident, rem sed totam velit! Aspernatur deserunt impedit provident! Ab ad, amet animi asperiores consectetur corporis cum cumque delectus dolorem eius expedita fuga id illum in inventore iusto laboriosam molestiae mollitia necessitatibus nemo nesciunt nobis optio quasi qui quia quidem quo reiciendis similique, sit soluta tempora voluptas voluptate, voluptatem. Ad alias aliquam animi assumenda atque autem consequatur cumque deleniti dolor dolorem, doloremque dolores dolorum eligendi et eveniet facere facilis in itaque iusto maiores maxime molestiae nemo non, nostrum nulla officiis optio placeat praesentium quis repellat reprehenderit sunt tempore vel. Aspernatur atque debitis distinctio, ea eius explicabo fugit illum in incidunt inventore ipsa ipsum iusto laborum libero maiores minus molestias, mollitia nam nisi obcaecati optio perferendis possimus quasi quod repudiandae sint voluptates. Ad assumenda consectetur culpa dolore error quod ratione. Asperiores assumenda, commodi consequatur cum debitis dignissimos eius eligendi est et eum magni maxime natus neque nulla, omnis porro praesentium quis sapiente, ut vel! Ad aliquam architecto beatae cumque delectus dignissimos earum eos, error ex facilis impedit iste iure maxime necessitatibus nisi nulla omnis praesentium quam quos recusandae, reiciendis saepe, ullam. Accusamus aperiam atque corporis debitis delectus dicta est inventore ipsam laborum minima molestias non odit optio provident quas repellendus sint soluta, voluptate.</h2>
            </main>
            </div>

            <footer>
                <Button text={"Log out"}/>
            </footer>
            </body>
        </>
    );
}

export default App;
