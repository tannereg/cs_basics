#include <iostream>
#include <stdio.h>

class Node
{
public:
    int value;
    Node *left;
    Node *right;

    Node(int value)
    {
        this->value = value;
    }
};

class Tree
{
public:
    Node *root;
    void add_node(int value)
    {
        if (root == NULL)
        {
            root = new Node(value);
        }
        else
        {
            find_node(value, root);
        }
    }

    void find_node(int value, Node *parent)
    {
        if (value < parent->value)
        {
            if (parent->left == NULL)
            {
                parent->left = new Node(value);
                return;
            }
            else
            {
                return find_node(value, parent->left);
            }
        }
        else if (value > parent->value)
        {
            if (parent->right == NULL)
            {
                parent->right = new Node(value);
                return;
            }
            else
            {
                return find_node(value, parent->right);
            }
        }
        else
        {
            std::cout << "Values cannot repeat!\n";
            return;
        }
    }

    void remove_node(int value)
    {
        if (value == root->value)
        {
        }
    }

    void print()
    {
        int counter = 0;
        print_recursive(counter, root);
    }
    void print_recursive(int counter, Node *parent)
    {
        if (parent == NULL)
        {
            return;
        }
        else
        {
            std::cout << "\nLevel " << counter << "\n";
            if (parent->right != NULL && parent->left != NULL)
            {
                std::cout << " " << parent->left->value << " " << parent->value << " " << parent->right->value;
            }
            else if (parent->right == NULL && parent->left != NULL)
            {
                std::cout << " " << parent->left->value << " " << parent->value << " ";
            }
            else if (parent->right != NULL && parent->left == NULL)
            {
                std::cout << " " << parent->value << " " << parent->right->value;
            }
            else
            {
                std::cout << " " << parent->value << " ";
            }
            print_recursive(counter + 1, parent->left);
            print_recursive(counter + 1, parent->right);
        }
    }
};

int main()
{
    Tree tree = Tree();
    tree.add_node(10);
    tree.add_node(5);
    tree.add_node(15);
    tree.add_node(7);
    tree.add_node(7);
    tree.add_node(3);
    tree.add_node(12);
    tree.add_node(17);
    tree.add_node(4);
    tree.add_node(19);
    tree.print();

    return 0;
}