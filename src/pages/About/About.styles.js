import styled from "styled-components";

export const AboutSection = styled.section`
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem 1rem;
    text-align: center;
`;

export const AboutTitle = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.primary};
`;

export const AboutText = styled.p`
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.text};
    
    strong {
        color: ${({ theme }) => theme.primary};
    }
`;

export const AboutList = styled.ul`
    list-style: none;
    padding: 0;
    margin-bottom: 2rem;
`;

export const AboutListItem = styled.li`
    font-size: 1.05rem;
    margin-bottom: 0.8rem;
    &:before {
        content: "🚀";
        margin-right: 0.5rem;
    }
`;
