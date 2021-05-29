import 'antd/dist/antd.css';
import { Button, message, Layout, Menu, Input, InputNumber, DatePicker, Form, Select } from 'antd';
import Link from 'next/link';
import styles from './register.module.scss';

import InvestimentoService from '../../services/investimentoService';
import CategoriaService from '../../services/categoriaService';
import { useEffect, useState } from 'react';
import { SelectValue } from 'antd/lib/select';

const { Header, Content, Footer } = Layout;

const { Option } = Select;

type Values = {
    codigoAtivo: string;
    valorCota: number;
    quantidadeCotas: number;
    dataCompra: string;
    categoria: { id: number };
}


export default function Cadastrar() {

    const [categorias, setCategorias] = useState([]);
    const [categoria, setCategoria] = useState({});

    const refreshCategorias = async () => {
        CategoriaService.retrieveAllCategorias()
            .then(response => {
                setCategorias(response.data)
            })
    }

    useEffect(() => {
        refreshCategorias();
    }, [])

    const layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 3 },
    };
    const tailLayout = {
        wrapperCol: { offset: 4 },
    };

    const onFinish = (values: Values) => {
        const newValues = {
            ...values,
            categoria: { id: values.categoria }
        }
        InvestimentoService.saveInvetimento(newValues);
        message.success('Investimento salvo com sucesso!');
    };

    const onFinishFailed = (errorInfo: any) => {
        message.error('O investimento não foi salvo!')
        console.log('Failed:', errorInfo);
    };

    const handleChange = (value) => {

        setCategoria(value);
    }

    return (
        <div className="container">
            <Layout className="layout">
                <Header>
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
                        <h2>CADASTRAR INVESTIMENTO</h2>
                        <Form {...layout}
                            name="basic"
                            initialValues={{ remember: true, }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            <Form.Item
                                label="Código do ativo"
                                name="codigoAtivo"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Insira o código do ativo!'
                                    }
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Valor da cota"
                                name="valorCota"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Insira o valor da cota!'
                                    }
                                ]}
                            >
                                <InputNumber />
                            </Form.Item>

                            <Form.Item
                                label="Quantidade de cotas"
                                name="qtdCotas"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Insira a quantidade de cotas!'
                                    }
                                ]}
                            >
                                <InputNumber />
                            </Form.Item>

                            <Form.Item
                                label="Data da compra"
                                name="dataCompra"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Insira a data da compra!'
                                    }
                                ]}
                            >
                                <DatePicker />
                            </Form.Item>
                            <Form.Item
                                label="Categoria id"
                                name="categoria"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Insira o id da categoria!'
                                    }
                                ]}
                            >
                                <Select onChange={handleChange}>
                                    {
                                        categorias.map((item) => {
                                            return (
                                                <Option key={item.id} value={item.id}>
                                                    {item.nome}
                                                </Option>
                                            )
                                        })
                                    }

                                </Select>
                            </Form.Item>

                            <Form.Item {...tailLayout} >
                                <Button type="primary" htmlType="submit" href="/" >
                                    Salvar
                                </Button>
                            </Form.Item>

                        </Form>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>My Invest 2021</Footer>
            </Layout>
        </div>
    )
}