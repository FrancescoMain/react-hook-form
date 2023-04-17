import { A, Line, Point, Ul } from "./style";

const Header = () => {
  return (
    <header>
      <nav>
        <Ul>
          <Line />
          <li>
            <A href="#">
              <Point>1</Point>
              <h3>Registration Form</h3>
            </A>
          </li>
          <Line />
          <li>
            <A>
              <Point>2</Point>
              <h3>Upload CV</h3>
            </A>
          </li>
          <Line />
          <li>
            <A>
              <Point>3</Point>
              <h3>Submit</h3>
            </A>
          </li>
          <Line />
        </Ul>
      </nav>
    </header>
  );
};

export default Header;
