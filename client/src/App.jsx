import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Add from "./pages/add/Add";
import Gig from "./pages/gig/Gig";
import Gigs from "./pages/gigs/Gigs";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Message from "./pages/message/Message";
import Messages from "./pages/messages/Messages";
import MyGigs from "./pages/myGigs/MyGigs";
import Orders from "./pages/orders/Orders";
import Register from "./pages/register/Register";
import "./app.scss";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const App = () => {
    const Layout = () => {
        return (
            <div className="app">
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        );
    };

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/add",
                    element: <Add />,
                },
                {
                    path: "/gig/:id",
                    element: <Gig />,
                },
                {
                    path: "/gigs",
                    element: <Gigs />,
                },
                {
                    path: "/login",
                    element: <Login />,
                },
                {
                    path: "/message/:id",
                    element: <Message />,
                },
                {
                    path: "/messages",
                    element: <Messages />,
                },
                {
                    path: "/mygigs",
                    element: <MyGigs />,
                },
                {
                    path: "/orders",
                    element: <Orders />,
                },
                {
                    path: "/register",
                    element: <Register />,
                },
            ],
        },
    ]);

    return (
        <div>
            <RouterProvider router={router} />
            <h1>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Distinctio voluptas reprehenderit temporibus tempore. Nam eum
                consequatur error velit, rerum omnis sequi. Ducimus quae
                sapiente eos voluptates rem sed veritatis praesentium. Porro
                impedit quae temporibus incidunt amet delectus adipisci, ipsam
                accusamus facere deserunt quos nemo cumque similique quasi in
                tempora minus? Non cum rem voluptates repudiandae corporis, quas
                debitis esse quibusdam. Dolores cumque iste architecto rerum
                nihil eius nisi facere, distinctio dolorem quas minus itaque
                omnis veniam consequatur eos, ipsam, soluta vitae vero libero
                voluptates deleniti! Perferendis enim quibusdam doloremque!
                Quos. Veritatis repellat nesciunt, dolor corporis voluptate nisi
                iure dicta fugit doloremque rerum, soluta, maxime in aperiam
                consequuntur ab fugiat dignissimos cupiditate illo modi qui nemo
                voluptas. Culpa doloremque corrupti incidunt. Ab assumenda quos
                exercitationem consequuntur dolores architecto vitae laborum,
                qui tempora inventore debitis tempore tenetur vel non, ducimus
                suscipit accusantium aliquam nihil alias omnis unde! Placeat
                facere veniam perspiciatis sed? Accusantium aliquid quas
                eligendi ullam quo unde, corporis ea tempora illum vitae,
                itaque, delectus vel excepturi consequatur amet non. Minima
                voluptate itaque doloribus ducimus porro voluptatum temporibus
                autem, quidem qui! Laudantium, voluptates est. Dolor molestiae
                voluptas voluptatibus quae iste vitae neque alias porro nobis
                totam eveniet voluptates repellendus explicabo, quidem, suscipit
                soluta. Recusandae quos soluta tempora alias pariatur quasi
                consectetur? Unde vero ullam ratione nemo recusandae. Cum,
                officia cumque amet vero, repellendus nemo magni recusandae
                totam reprehenderit dolorum ipsa voluptatibus sapiente. Ex
                placeat iusto molestiae ipsa eum possimus aspernatur ad? Nisi
                numquam suscipit nesciunt perspiciatis at enim iste voluptatibus
                corrupti rerum voluptatum. Sed, deleniti dolorem modi dolores
                reiciendis labore necessitatibus provident tempore error
                eligendi incidunt assumenda, doloremque numquam commodi
                consequuntur. At voluptas alias minus. Quasi ea et dolore animi
                voluptatem, consequatur quidem magni quod. Numquam distinctio
                impedit nisi sunt dolor minus. Soluta ratione molestiae sint
                fuga, voluptates laboriosam dolor voluptate? Inventore alias
                cupiditate dolore. Et itaque possimus veritatis nesciunt?
                Dolores itaque voluptas at, molestias velit beatae, doloremque
                quos ipsam, iure quidem perspiciatis nemo. Autem numquam rerum
                nihil nobis voluptatibus architecto. Facilis nobis deserunt quas
                ipsum commodi doloremque accusamus dolorem quam est nulla qui
                eum vero, officiis sequi ut expedita aliquam iusto voluptatem
                explicabo facere nisi perspiciatis soluta, quia illo? Velit.
                Voluptatum, odit qui! Quas optio odit vel vero asperiores, illum
                mollitia at aliquid, obcaecati doloribus porro perspiciatis
                aliquam officiis reprehenderit odio error ipsam dicta?
                Praesentium ex qui repellat debitis amet? Dolores asperiores
                quisquam iure excepturi vel in dolorum dicta maiores vitae quia,
                reprehenderit, libero est placeat labore recusandae expedita
                consequatur nemo molestias quae et? Porro aut illum veniam
                deserunt! Maxime! Nesciunt sit autem excepturi odio eveniet
                quidem eaque laborum nostrum accusantium. Accusamus labore velit
                quibusdam et distinctio eveniet architecto, qui id corporis
                cupiditate sed numquam necessitatibus iusto harum minima
                corrupti. Quis natus temporibus exercitationem accusamus,
                numquam magnam at sapiente quia minus quidem blanditiis modi
                voluptas ut obcaecati dolorem impedit nihil ad. Tempore
                voluptate voluptates iure eius esse nihil sequi dignissimos.
                Amet non possimus molestias dolorem! Aliquam ad consectetur
                voluptatibus rem vitae fugit odio, quae ex corrupti quia
                consequatur ipsum eveniet impedit sequi dicta neque excepturi
                vero ratione nam dignissimos. Aliquid! Delectus, molestias
                assumenda quos dolores quidem optio voluptate nam. Sint ullam
                quae autem possimus, quas qui earum vero quibusdam maiores
                facere voluptas, eveniet velit hic temporibus officiis, dolore
                aliquam aut. Ducimus numquam ipsa voluptas ab error. Ducimus
                recusandae nemo iste exercitationem in non laboriosam debitis
                sint, saepe ut vero fugiat nesciunt omnis est aut dolores
                explicabo, excepturi cum similique quis! Animi accusamus
                veritatis illum vitae doloremque exercitationem deserunt nihil
                ullam illo quidem harum rem veniam cupiditate dolorem itaque
                inventore iste repellat modi ex quasi laborum, molestias earum.
                Aspernatur, alias neque.
            </h1>
        </div>
    );
};

export default App;
