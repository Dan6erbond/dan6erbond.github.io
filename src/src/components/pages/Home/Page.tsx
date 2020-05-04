import React from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

export const Page = (props: any) => <div className="page">{props.children}</div>;

Page.propTypes = {
    children: PropTypes.node
};

export const PageContainer = (props: any) => <div className="page-container">{props.children}</div>;

PageContainer.propTypes = {
    children: PropTypes.node
};

export const PageTitle = (props: any) => <p className={`title ${props.class}`}>{props.children}</p>;

PageTitle.propTypes = {
    children: PropTypes.node,
    class: PropTypes.string
};

export const PageContent = (props: any) => <div className="content">{props.children}</div>;

PageContent.propTypes = {
    children: PropTypes.node
};

export const PageTags = (props: any) => <div className="tags">{props.children}</div>;

PageContent.propTypes = {
    children: PropTypes.node
};

export const PageTag = (props: any) => <Link className="tag" to={props.link}>{props.children}</Link>;

PageContent.propTypes = {
    children: PropTypes.node,
    link: PropTypes.string
};