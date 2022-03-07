import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <nav className="nav">
        <h2>
          <Link href="/">Chaoo Charles Blog</Link>
        </h2>
        <div>
          <div>
            <a href="https://chaoocharles.dev/" target="_blank">
              My Portfolio
            </a>
          </div>
        </div>
      </nav>
      <style jsx>
        {`
          .nav {
            background: #181818;
            color: white;
            height: 70px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 20px;
          }
        `}
      </style>
    </>
  );
};

export default NavBar;
