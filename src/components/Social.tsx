
import "./SocialStyle.css";
import { GithubOutlined,FacebookOutlined } from "@ant-design/icons";

const Social = () => {
  return (
    <>
      <ul className="social-ul flex ml-10">
      <li><a href="#"><GithubOutlined className="fab" aria-hidden="true"/></a></li>
      <li><a href="#"><FacebookOutlined className="fab" aria-hidden="true"/></a></li>
      <li><a href="#"><GithubOutlined className="fab" aria-hidden="true"/></a></li>
      <li><a href="#"><GithubOutlined className="fab" aria-hidden="true"/></a></li>
      </ul>
    </>
  );
};

export default Social;
