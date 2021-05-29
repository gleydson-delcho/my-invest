import 'antd/dist/antd.css';
import { Table, Button, message, Layout, Menu } from 'antd';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './list.module.scss';

import InvestimentosService from '../../services/investimentoService';

const { Header, Content, Footer } = Layout;
const { Column } = Table;


export default function Listar() {

    const [investimentos, setInvestimentos] = useState([]);

    const refreshInvestimentos = async () => {
        InvestimentosService.retrieveAllInvestimentos()
            .then(response => setInvestimentos(response.data))
    }

    useEffect(() => {
        refreshInvestimentos();
    }, [investimentos])

    const remove = (record) => {
        InvestimentosService.deleteInvestimento(record.id);
        message.success('Investimento removido com sucesso!');
    }

    return (
        <div className="container">
            <Layout className="layout">
                <Header className={styles.header}>
                    <div className={styles.logo} />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">
                            <Link href="/cadastrar-investimento">
                                <a>Cadastrar Investimento</a>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link href="/listar-investimentos">
                                <a>Listar Investimentos</a>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <div className={styles.siteLayoutContent}>
                        <h2>INVESTIMENTOS</h2>
                        <Table dataSource={investimentos} >
                            <Column title="Código do ativo" dataIndex="codigoAtivo" key="codigoAtivo" />
                            <Column title="Valor" dataIndex="valorCota" key="valorCota" />
                            <Column title="Quantidade de cotas" dataIndex="qtdCotas" key="qtdCotas" />
                            <Column title="Data da compra" dataIndex="dataCompra" key="dataCompra"  />
                            <Column title="Remover" key="atualizar"
                                render={(text, record) => (<Button onClick={() => remove(record)}
                                    type="primary">
                                    Remover
                                </Button>)}
                            />
                        </Table>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>My Invest 2021</Footer>
            </Layout>
        </div>
    )
}