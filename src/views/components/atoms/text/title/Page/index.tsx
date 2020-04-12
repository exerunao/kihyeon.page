import styled from 'styled-components';

const PageTitleText = styled.span`
  font-size: 48px;
  font-weight: 500;
  letter-spacing: 3.6px;
  line-height: 1;
  color: ${({ theme }) => theme.color.styleguid['$denim']};
`;

export default PageTitleText;