import type {NextPage} from 'next'
import Note from "../src/components/note/Note";
import MainLayout from "../src/components/layout/MainLayout";

const Home: NextPage = () => <MainLayout><Note/></MainLayout>

export default Home

