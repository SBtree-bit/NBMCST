import { Presets } from "rete-react-plugin";
import { css } from "styled-components";

const styles = css<{ selected?: boolean }>`
  background: #6F9283;
  border-color: #391463;
  .title {
    color: #ffffff;
  }
  &:hover {
    background: #8D9F87;
  }
  .output-socket {
    margin-right: -1px;
  }
  .input-socket {
    margin-left: -1px;
  }
  ${(props) =>
    props.selected &&
    css`
      border-color: red;
    `}
`;

export function StyledNode(props: any) {
  return <Presets.classic.Node styles={() => styles} {...props} />;
}
