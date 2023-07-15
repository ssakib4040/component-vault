import "./Header.scss";

export default function Header() {
  return (
    <header>
      <nav>
        <a href="/" class="logo">
          Component Vault
        </a>

        <a
          href="https://github.com/ssakib4040/components-vault"
          target="_blank"
          class="menu-toggle"
        >
          Github
        </a>
      </nav>
    </header>
  );
}
