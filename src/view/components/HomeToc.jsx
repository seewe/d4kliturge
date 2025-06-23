import homeToc from "../../models/homeToc";
import Copyright from "./copyright";
import HomeDesc from "./HomeDesc";
import HomeTocElmt from "./HomeTocElmt";

export default function HomeToc() {
  return (
    <div className="container" id="pageHome">
      <div className="card border border-0">
        <div className="card-body">
          <HomeDesc />
          {homeToc.map((toc) => (
            <HomeTocElmt
              key={toc.title}
              title={toc.title}
              description={toc.description}
              icon={toc.icon}
              link={toc.link}
            />
          ))}
          <Copyright
            label="Data For Know, 2025"
            link="https://seeweapps-dataforknow.share.connect.posit.cloud/_w_00c8dae900d8452a92d80933972d120a/#!/"
          />
        </div>
      </div>
    </div>
  );
}
