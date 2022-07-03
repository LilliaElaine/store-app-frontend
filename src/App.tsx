import {
  AppShell,
  Header,
  MantineProvider,
  Text,
  Image,
  Group,
  Button,
  TextInput,
  UnstyledButton,
} from "@mantine/core";
import { Link } from "react-router-dom";
import React from "react";
import "./App.css";
import { Search } from "tabler-icons-react";
import ProductCard from "./Components/productCard";

function App() {
  return (
    <MantineProvider
      theme={{ colorScheme: "dark" }}
      withGlobalStyles
      withNormalizeCSS
    >
      <AppShell
        header={
          <Header height={60} p="xs">
            <div
              style={{ display: "flex", alignItems: "center", height: "100%" }}
            >
              <Link to="/">
                <UnstyledButton
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{ width: "10%" }}
                    src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png"
                  />
                </UnstyledButton>
              </Link>
              <Group
                style={{
                  position: "absolute",
                  right: "0",
                  paddingRight: "5vw",
                }}
                spacing="sm"
              >
                <Link to="/popular">
                  <Button>Popular Items</Button>
                </Link>
                <Link to="/categories">
                  <Button>Categories</Button>
                </Link>
                <TextInput placeholder="Search" icon={<Search size={14} />} />
              </Group>
            </div>
          </Header>
        }
      >
        <div
          style={{ display: "flex", flexDirection: "row", overflow: "hidden" }}
        >
          <ProductCard id={12356} />
          <ProductCard id={1111} />
          <ProductCard id={1111} />
          <ProductCard id={1111} />
          <ProductCard id={12356} />
        </div>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
