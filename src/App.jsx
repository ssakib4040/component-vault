import { Routes, Route, Link } from "react-router-dom";
import "./App.scss";

// components
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";

// pages
import Dropdown from "./pages/dropdown/dropdown";

export function App() {
  return (
    <>
      <Header />

      <div className="container">
        <Sidebar />

        <Content>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />

              <Route path="dropdown.html" element={<Dropdown />} />

              <Route path="*" element={<NoMatch />} />
            </Route>
          </Routes>
        </Content>
      </div>
    </>
  );
}

function Home() {
  return (
    <div>
      <h3>Home</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, optio
        veniam esse inventore non necessitatibus architecto minus. Voluptas,
        alias sed distinctio itaque repellendus perferendis sapiente tempora ea
        atque cum eos quisquam maxime dolore facilis illum possimus eaque,
        quidem veritatis, placeat error. Quia, nulla reprehenderit molestias,
        corrupti perferendis repellat libero quidem vel eligendi qui quas velit?
        Eius rerum recusandae nam? Consequuntur neque, eum esse modi at illum
        eligendi voluptas magni aliquam odit repellat nostrum impedit assumenda
        omnis cupiditate maiores quibusdam labore! Vel suscipit iure quaerat
        nemo placeat doloremque. Perspiciatis corrupti explicabo in numquam
        reiciendis dolore quod, illum illo eos dolor aperiam at voluptatibus
        similique voluptatum harum sunt natus, sapiente, repudiandae vel.
        Obcaecati quod debitis laudantium illum, magni placeat laboriosam quos
        aperiam possimus pariatur minima, natus, soluta cum recusandae.
        Consequatur nam ad repellendus velit beatae vel illum, modi, ullam harum
        at ipsa. Tempore quidem aut tenetur, incidunt, qui officiis eum itaque,
        fugit obcaecati quam veniam nobis doloribus ex maiores voluptatibus vero
        totam adipisci facere libero nisi deserunt similique dolorum perferendis
        doloremque. Quidem corporis quasi reprehenderit quos praesentium nostrum
        eos iure quaerat quis dolorem nihil animi, nesciunt amet! Sequi,
        exercitationem dicta ex perspiciatis facilis voluptatibus aperiam non
        doloribus perferendis fuga, nihil magnam, saepe culpa. Non veritatis
        nisi facere consequatur at. Tenetur, culpa optio. Quo accusantium minus
        nihil laboriosam omnis id, mollitia unde quas neque esse voluptates,
        veniam fugiat architecto? Perspiciatis unde minus laboriosam dolor! Ex
        laudantium laborum nisi perferendis libero quos quisquam enim maxime
        voluptatem incidunt quibusdam minus molestias sapiente, quaerat illum
        aspernatur quia. Earum doloribus molestias itaque, asperiores obcaecati
        ratione vel cupiditate eveniet dicta aut officiis hic ea ut qui illo.
        Molestias voluptate harum incidunt officia illo ipsam, voluptatibus
        corporis. Sed nulla in atque repellat quos ipsam tempore earum
        voluptates minus odit similique beatae, deleniti laboriosam illum sequi,
        dicta quod excepturi aliquid explicabo officiis perspiciatis cumque
        nostrum placeat suscipit. Magni nam perspiciatis nisi nulla repellendus,
        alias tenetur asperiores pariatur, reprehenderit molestias repellat
        ipsam debitis eius quaerat veritatis, odit nostrum eos corporis
        explicabo nesciunt deserunt! Reprehenderit aliquam pariatur corporis
        repellendus quis dolor iure hic mollitia, reiciendis soluta temporibus
        aliquid earum! Nihil similique magnam non? Minus, ipsum porro totam enim
        provident aperiam, itaque atque illum omnis deleniti alias, repudiandae
        libero? Ab quaerat vero, non corporis distinctio veniam earum eum minus
        corrupti ut tenetur magnam deserunt tempore iusto. Tenetur repudiandae
        officiis ducimus magni. Eum necessitatibus aliquam corporis molestias
        nostrum. Eius, quod! Nisi libero odit at amet, voluptas officia
        laudantium. Maiores tempore numquam dicta repellat voluptas ullam ipsum,
        aspernatur reiciendis consequatur! Eligendi officiis commodi distinctio
        exercitationem vitae neque quas ut veritatis voluptatum! Corporis sed
        provident tempore temporibus consequatur molestias nesciunt perferendis
        fuga veritatis odit similique, voluptatibus dolor placeat harum officiis
        repudiandae laudantium accusamus facere recusandae? Molestiae quae magni
        iusto, libero impedit natus et magnam, harum voluptas quam dicta iste
        nam. Consequuntur commodi officiis aliquid impedit eos quas dolores,
        voluptates saepe molestias vitae rerum quo officia hic, esse optio
        doloribus ex accusantium ipsam illum dolor qui, deleniti aspernatur cum
        est? Quaerat nemo molestias reprehenderit, voluptas quam fugiat illo
        suscipit explicabo vitae saepe, dolores repellendus, nihil consectetur
        quod. Animi ipsa deserunt soluta unde autem. Dolor nulla molestiae quod
        placeat vel necessitatibus veniam facere ab quos accusantium delectus
        excepturi rem expedita, minima laboriosam repellat possimus quasi, natus
        numquam. Magnam incidunt ullam, tenetur, temporibus sed minus velit
        accusamus nulla eveniet maxime officia. Eos cum nobis a nisi,
        consectetur facere eveniet cupiditate, recusandae dicta illo odit
        impedit explicabo culpa assumenda nihil autem ipsam, quis non quidem?
        Alias eos quisquam sit dolorem quaerat error animi. Pariatur, id
        recusandae similique delectus voluptates neque ipsum! Libero beatae ea
        ad. Quasi recusandae, amet iusto aspernatur debitis optio nobis tempora
        hic similique? Quam, cumque omnis minus porro maiores at aut dicta modi
        voluptas molestias quisquam quo non, excepturi ex? Aperiam non sapiente
        reiciendis error debitis laboriosam voluptate repellat eveniet corrupti
        dolor ab cum molestiae quas atque quod tempora adipisci quidem, neque
        porro qui optio perferendis veniam. Eligendi perferendis laboriosam
        libero architecto enim alias tenetur odit sed delectus cupiditate eos,
        iusto aperiam sunt atque quas at sequi, itaque hic ad doloribus
        necessitatibus adipisci. Dignissimos, dolorum asperiores. Non soluta
        fugit, vero iure voluptate et voluptas laudantium dolor. Eveniet,
        officiis quibusdam placeat accusamus laborum quo id autem nemo numquam
        officia ratione repudiandae quae. Explicabo beatae ullam, sit iure
        doloremque veniam quia totam accusamus accusantium quas sint at est
        perferendis quos? Rerum, ipsa nisi at tempore, dolore consequatur veniam
        totam cumque velit voluptate laudantium eos reiciendis delectus suscipit
        nihil incidunt, laborum soluta deleniti? Hic, recusandae consectetur.
        Nihil, quod corporis recusandae atque ipsam hic aliquid quibusdam facere
        animi consectetur autem, soluta, adipisci accusantium a qui! Nisi
        voluptates qui atque quam ullam voluptatum repellat tempora tempore
        corrupti ad est quos impedit ipsa, dicta dolores rerum itaque fuga
        minima error voluptatem ipsum eos optio vel numquam? Ut recusandae alias
        magnam quidem, fuga sunt consequatur illum fugit dolor? Itaque
        asperiores eligendi dicta quasi. Asperiores totam eum, tempora possimus
        aperiam non deleniti ipsum excepturi facilis, eaque deserunt
        exercitationem unde nesciunt repellat amet consequuntur magni incidunt
        repellendus dolorem ducimus tempore corporis placeat fuga facere? Eos
        sit placeat laborum corporis cumque architecto repudiandae
        exercitationem optio, totam, non ipsa ullam eligendi enim tempora quod
        vel fugit accusantium deleniti consequuntur fugiat? Commodi repudiandae
        recusandae iure voluptates eum maiores nemo accusamus vero, ad nesciunt
        odio vitae? Officiis porro quia commodi accusamus consequuntur repellat
        libero consequatur rerum accusantium, odio in nihil, tenetur est aliquam
        quis rem ipsa unde maiores deserunt quaerat, ea at impedit quod quae.
        Ex, eaque officia! Illum, labore. Quidem, ipsa esse optio aliquam
        mollitia perferendis voluptatibus est itaque! Inventore accusantium
        tempore harum hic quas quae cupiditate repellendus amet aliquid nulla
        totam placeat ad, culpa dicta nostrum sed dolore reprehenderit earum
        veritatis aut doloremque quisquam, voluptas in! Rerum optio deserunt
        dignissimos eveniet placeat numquam labore laudantium, quo fuga.
        Repudiandae cupiditate nobis, eos aspernatur adipisci aut? Eum sint
        veniam repellendus libero esse et officia? Odio laboriosam eos facilis
        nemo ipsa fugiat saepe id neque, in culpa ipsum tempore vel animi
        quibusdam reiciendis? Harum atque temporibus illum repellendus modi eum
        dolorum.
      </p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h3>Nothing to see here!</h3>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
