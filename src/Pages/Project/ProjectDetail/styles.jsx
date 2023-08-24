import { styled } from 'styled-components';

import Colors from '../../../Colors';

export const ProjectContainer = styled.div`
  display: flex;
  align-items:flex-start;
  align-content:flex-start;
  width: 100%;
  max-width: 1200px;
  margin-top: 40px;
  gap: 22px;
`;

export const Description = styled.article`
  width: 700px;
  min-height: 245px;
  border-radius: 8px;
  border: 1px solid ${Colors.secondary200};
`;

export const DescriptionTitle = styled.h2`
  display: flex;
  padding: 16px 24px;
  color: ${Colors.secondary900};
  font-size: 16px;
  font-weight: 600;
  border-bottom: 1px solid ${Colors.secondary200};
  align-items: center;
  margin: 0px;
  gap: 8px;
`;

export const DescriptionText = styled.p`
  padding: 16px 24px;
  font-size: 12px;
  color: ${Colors.secondary900};
  margin: 0px;
`;

export const Participants = styled.div`
  display: flex;
  width: 300px;
  padding: 20px 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  border-top: 1px solid ${Colors.secondary200};

  .participant {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .participant-name {
    font-size: 12px;
    color: ${Colors.secondary900};
  }
`;

export const SectionTitle = styled.h2`
  color: ${Colors.secondary900};
  font-size: 16px;
  font-weight: 600;
  margin: 0px;
`;

export const ItemsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  color: ${Colors.secondary900};
  font-size: 12px;

  list-style-type: none;
  margin-block-start: 4px;
  margin-block-end: 0px;
  padding-inline-start: 0px;

  li:before {
    content:"";
    display: inline-block;
    background-color: ${Colors.secondary900};
    width: 8px;
    height: 8px;
    border-radius: 8px;
    margin-right: 10px;
  }
`;