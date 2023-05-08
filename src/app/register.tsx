import { useNavigate, useParams } from "@tanstack/router";
import { AppBar, Button, Scaffold, Text } from "../components";
import { IconBack } from "../components/icons";

export default function PageRegister() {
  const { eventId } = useParams();
  const navigate = useNavigate();

  const appBar = (
    <AppBar
      responsive
      sticky
      gap={6}
      leading={
        <Button
          label="Instructions"
          Icon={IconBack}
          buttonStyle="action"
          onClick={() => navigate({ to: `/instructions/${eventId}` })}
        />
      }
    >
      <ul className="steps responsive stick top-0">
        <li className="complete">Instructions</li>
        <li className="active">Register</li>
        <li>Payment</li>
        <li>Confirmation</li>
      </ul>
      <Text className="responsive" headingLevel={4} bold>
        Register
      </Text>
    </AppBar>
  );

  const bottomAppBar = (
    <AppBar responsive sticky="bottom" background="gradient">
      <Button buttonStyle="emphasis" label="Register" className="responsive" />
    </AppBar>
  );

  return (
    <Scaffold
      className="fadeInRight"
      responsive
      appBar={appBar}
      bottomAppBar={bottomAppBar}
    >
      Work under Progress Lorem, ipsum dolor sit amet consectetur adipisicing
      elit. Et explicabo quidem porro nisi nesciunt excepturi nobis nemo unde in
      inventore necessitatibus veniam, doloribus, doloremque at corrupti libero
      nulla dolorem ex dicta. Perspiciatis, magnam architecto magni hic
      recusandae minus voluptate suscipit quasi incidunt delectus voluptas
      labore unde consectetur nisi nulla voluptatum, dolorem mollitia? Eos
      adipisci sunt esse sit! Repellendus odio asperiores dolores culpa quis
      voluptate pariatur impedit alias voluptatem omnis vitae non sunt ad
      officiis quidem eveniet, rerum voluptas tempore explicabo ipsa ullam quas!
      Atque iste velit aperiam nihil consequatur, temporibus sed voluptate non
      iure fuga natus similique. Harum porro sit ipsum placeat minus
      repudiandae, mollitia nulla neque nihil magnam quaerat tempora, eos
      reprehenderit, officia consectetur. Iure culpa reprehenderit, ducimus
      aliquam dignissimos similique, ea id adipisci optio nam neque iste vero ut
      expedita repellat quaerat eaque. Voluptas eos totam doloremque dicta
      repudiandae quaerat minima eum aliquid similique, dignissimos, odit
      laboriosam ut repellendus voluptates veniam quia asperiores dolor
      doloribus expedita enim perspiciatis! Architecto alias iusto quia,
      sapiente labore sunt sint nulla iste minima reprehenderit nostrum, fuga
      deleniti totam natus laborum odio incidunt fugit? Quis laborum sit quasi
      earum quibusdam temporibus, neque aperiam labore adipisci, sed distinctio
      eos obcaecati. Eum numquam exercitationem ipsum dicta nisi aliquam
      pariatur fugiat labore maiores recusandae, impedit facere maxime, ducimus
      consectetur porro molestias praesentium! Libero laboriosam quam aspernatur
      eligendi officia quaerat hic repellendus magni blanditiis consectetur
      sapiente, optio cumque possimus ad ea debitis, id nam! Similique harum
      enim dignissimos necessitatibus, sint cumque distinctio, totam nemo
      temporibus amet minus. Explicabo aliquam tenetur sunt quo et porro odio
      natus deleniti veniam architecto dignissimos incidunt asperiores, illo
      aperiam cupiditate quaerat aliquid eveniet quidem amet numquam repellat
      placeat ullam rerum? Aspernatur, officia dolores? Et nihil ipsa eveniet
      minima eos magni, laboriosam temporibus ipsam numquam quam distinctio
      aliquid impedit dignissimos hic dolorum veritatis dolor ducimus aspernatur
      quibusdam consectetur fugiat fuga omnis vel! Enim harum laboriosam
      repellat ducimus officia voluptas officiis adipisci voluptatum accusantium
      repudiandae error fugiat neque illo quia dolores illum quae voluptate,
      explicabo labore maiores quaerat sed laudantium quod! Autem accusantium
      soluta dolores molestiae vitae eum accusamus quasi. Aperiam molestias
      debitis nisi, repellendus commodi laborum quis dolorum rem voluptas!
      Dolorem distinctio ad sunt laboriosam repudiandae officia, fugit ex
      officiis porro obcaecati dolores id. Molestias magnam ipsam obcaecati
      debitis voluptatem quas accusamus veritatis quis molestiae quos maiores
      nobis animi ad, neque, ut a expedita excepturi rem! Modi earum provident
      commodi qui ipsa suscipit, repellat, sunt voluptatum odio quod alias,
      accusamus dolore debitis nisi ipsam quibusdam iure totam doloribus
      officia. Assumenda, sit maxime voluptatibus odio autem tempora
      exercitationem labore repudiandae dolore minima delectus mollitia nihil ex
      nemo doloremque laudantium iste, cum quaerat corporis. Omnis beatae veniam
      aperiam eligendi praesentium facilis placeat non consequatur dolorum
      recusandae quod minus vero, illum dicta sapiente sunt iure at nam quae rem
      ipsam officia! Alias optio est facere dolorum, quisquam veritatis! Maiores
      sunt amet odit excepturi. In incidunt illo officiis inventore, dolorum
      soluta dolore velit, laboriosam, et aliquam repellendus voluptas impedit
      quia sint quas? Quos temporibus similique ea alias.
    </Scaffold>
  );
}
