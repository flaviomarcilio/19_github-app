import styled from "styled-components";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Card } from "..";

export const UserRepositories = ({ repositories, starred }) => {
    return (
        <STabs selectedTabClassName='isSelected' selectedTabPanelClassName='isSelected'>
            <STabList>
                <STab>Repositories</STab>
                <STab>Starred</STab>
            </STabList>

            <STabPanel>
                <SList>
                    {repositories && repositories.map(item => (
                        <Card key={item.id}
                              name={item.name}
                              fullname={item.full_name}
                              link={item.html_url} />
                    ))}
                </SList>
            </STabPanel>
            <STabPanel>
                <SList>
                    {starred && starred.map(item => (
                        <Card key={item.id}
                              name={item.name}
                              fullname={item.full_name}
                              link={item.html_url} />
                    ))}
                </SList>
            </STabPanel>
        </STabs>
    )
}

const STabs = styled(Tabs)`
    font-size: 16px;
    width: 100%;
    margin-top: 16px;
`;

const STabList = styled(TabList)`
    justify-content: center;
    list-style-type: none;
    padding: 4px;
    display: flex;
    margin: 8px;
`;

const STab = styled(Tab)`
    border: 1px solid #ccc;
    border-radius: 16px;
    padding: 16px;
    cursor: pointer;
    user-select: none;
    margin: 3px 3px;
    font-weight: bold;

    &:focus {
        outline: none;
    }

    &.isSelected {
        background: #0C162D;
        box-shadow: 3px 2px 13px rgba(255, 255, 255, 0.2);
    }
`;

const STabPanel = styled(TabPanel)`

    &.isSelected {
        display: block;
    }
`;

const SList = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;