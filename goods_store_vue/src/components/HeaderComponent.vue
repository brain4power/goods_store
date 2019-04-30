<template>
    <div class="header_div">
        <div class="container">
            <div class="col-12 p-0 d-flex align-items-stretch justify-content-between header_row">
                <div class="p-0 row justify-content-start">
                    <div id="parentx" class="p-0 pr-3 pl-3 d-flex align-items-stretch">
                        <button @click="active=!active" class="d-flex align-items-center">
                            <span class="d-none d-sm-block header_menu_catalog_name primary">Каталог товаров</span>
                            <vs-icon icon="menu" color="primary"></vs-icon>
                        </button>
                        <vs-sidebar parent="body" default-index="1" color="primary" class="sidebarx" spacer
                                    v-model="active">
                            <div class="header-sidebar" slot="header">
                                <vs-avatar size="70px" src="https://randomuser.me/api/portraits/men/85.jpg"/>

                                <h4>
                                    My Name
                                    <vs-button color="primary" icon="more_horiz" type="flat"></vs-button>
                                </h4>

                            </div>
                            <vs-sidebar-group title="Aplication">
                                <vs-sidebar-item index="1" icon="question_answer">
                                    Dashboard
                                </vs-sidebar-item>
                                <vs-sidebar-group title="Store">
                                    <vs-sidebar-item index="2.1" icon="store">
                                        Store
                                    </vs-sidebar-item>
                                    <vs-sidebar-item index="2.2" icon="nature_people">
                                        Nature
                                    </vs-sidebar-item>
                                    <vs-sidebar-item index="2.3" icon="style">
                                        Style
                                    </vs-sidebar-item>
                                </vs-sidebar-group>
                                <vs-sidebar-item index="2" icon="gavel">
                                    History
                                </vs-sidebar-item>
                                <vs-sidebar-item index="3" icon="https">
                                    security
                                </vs-sidebar-item>
                                <vs-sidebar-item index="4" icon="help">
                                    Help
                                </vs-sidebar-item>
                            </vs-sidebar-group>


                            <vs-divider icon="person" position="left">
                                User
                            </vs-divider>

                            <vs-sidebar-item index="5" icon="verified_user">
                                Configurations
                            </vs-sidebar-item>
                            <vs-sidebar-item index="6" icon="account_box">
                                Profile
                            </vs-sidebar-item>

                            <div class="footer-sidebar" slot="footer">
                                <vs-button icon="reply" color="danger" type="flat">log out</vs-button>
                                <vs-button icon="settings" color="primary" type="border"></vs-button>
                            </div>

                        </vs-sidebar>
                    </div>
                    <button class="p-0 d-flex align-items-stretch">
                        <vs-icon icon="favorite_border" color="primary"></vs-icon>
                    </button>
                </div>
                <div class="p-0 row pr-3 justify-content-end">
                    <button class="d-flex align-items-stretch justify-content-end">
                        <vs-icon icon="search" color="primary"></vs-icon>
                    </button>
                    <div class="d-flex align-items-center p-0 pl-3 cart_ico">
                        <button class="d-flex align-items-stretch justify-content-end cart_ico">
                            <vs-icon icon="shopping_cart" color="primary"></vs-icon>
                            <span class="cart_counter danger">{{cart_counter}}</span>
                            <span class="d-none d-sm-block primary pl-2">{{total_cost}}p</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderComponent",
        data: () => ({
            active: false,
            cart_counter: 10,
            total_cost: 100000,
        })
    }
</script>

<style scoped>
    .header_div {
        box-shadow: 0 0 5px rgba(122, 122, 122, 0.5);
    }

    .primary {
        color: rgb(31, 116, 255);
    }

    .danger {
        background: rgb(255, 71, 87);
    }

    .header_row {
        height: 50px;
    }

    .header_row button {
        border: none;
        outline: none;
        background-color: inherit;
    }

    .header_menu_catalog_name {
        padding-bottom: 3px;
        padding-right: 7px;
    }

    .header-sidebar {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
    }

    .header-sidebar h4 {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%
    }

    .header-sidebar h4 button {
        margin-left: 10px;
    }

    .footer-sidebar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    .footer-sidebar button {
        border: 0px solid rgba(0, 0, 0, 0) !important;
        border-left: 1px solid rgba(0, 0, 0, .07) !important;
        border-radius: 0px !important;
    }

    .cart_ico {
        position: relative;
    }

    .cart_counter {
        position: absolute;
        z-index: 1;
        overflow: hidden;
        display: inline-block;
        min-width: 19px;
        max-width: 50px;
        height: 19px;
        margin-top: -4px;
        margin-left: 7px;
        padding: 0 3px;
        line-height: 19px;
        vertical-align: middle;
        text-align: center;
        text-overflow: ellipsis;
        font-size: 11px;
        color: #fff;
        border-radius: 20px;
        top: -4px;
        left: 5px;
        font-weight: 700;
    }
</style>
