import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -10rem;

    div {
        background: var(--shape);
        padding: 1.2rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong {
            display: block;
            font-size: 2rem;
            margin-top: 1rem;
            font-weight: 500;
            line-height: 3rem;
        }

        &.highlight-background {
        background: linear-gradient(to right, var(--blue-light), var(--green));
        color: #FFF;
        }
    }
`