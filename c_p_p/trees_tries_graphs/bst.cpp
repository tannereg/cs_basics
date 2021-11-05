#include <iostream>
#include <stdio.h>
#include <vector>

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

    void replace_node(Node *parent, int value)
    {
        if (check_node(parent->left, value))
        {
            std::cout << "Not found in left" << std::endl;
            return;
        }
        // if (check_node(parent->right, value))
        // {
        //     std::cout << "Not found in right" << std::endl;
        //     return;
        // }
    }

    bool check_node(Node *targetNode, int value)
    {
        // if (targetNode != NULL)
        // {
        //     if (targetNode->value == value)
        //     {
        //         if (targetNode->left != NULL)
        //         {
        //             left_right_most(targetNode);
        //         }
        //         else if (targetNode->right != NULL)
        //         {
        //             std::cout << "Right leftmost here" << std::endl;
        //         }
        //         else
        //         {
        //             targetNode = NULL;
        //         }
        //     }
        //     else
        //     {
        //         replace_node(targetNode, value);
        //     }
        // }
        return false;
    }

    void remove_node(int value)
    {
        Node *parent;
        parent->left = root;
        parent->right = root;
        replace_node(parent, value);
    }

    void print_vector(const std::vector<std::vector<int> > vect)
    {
        for (int i = 0; i <= vect.size(); i++)
        {
            for (int j = 0; i <= vect.at(i).size(); j++)
            {
                std::cout << vect.at(i).at(j) << " ";
            }
            std::cout << std::endl;
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
            std::cout << "\n\nLevel " << counter << "\n";
            if (parent->right != NULL && parent->left != NULL)
            {
                std::cout << " " << parent->left->value << "<-" << parent->value << "->" << parent->right->value;
            }
            else if (parent->right == NULL && parent->left != NULL)
            {
                std::cout << " " << parent->left->value << "<-" << parent->value << "->";
            }
            else if (parent->right != NULL && parent->left == NULL)
            {
                std::cout << " <-" << parent->value << "->" << parent->right->value;
            }
            else
            {
                std::cout << "   <-" << parent->value << "->";
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
    tree.add_node(3);
    tree.add_node(7);
    tree.add_node(13);
    tree.add_node(17);
    tree.add_node(1);
    tree.add_node(4);
    tree.add_node(6);
    tree.add_node(8);
    tree.add_node(11);
    tree.add_node(14);
    tree.add_node(16);
    tree.add_node(18);
    tree.remove_node(1);
    tree.print();

    return 0;
}