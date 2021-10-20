#include <iostream>
#include <stdio.h>

class Node
{
public:
    int data;
    Node *next;
    Node(int data)
    {
        this->data = data;
    }
};

class LinkedList
{
public:
    Node *head;
    Node *prev;

    void add_node(Node *node)
    {
        if (head == NULL)
        {
            head = node;
            prev = node;
        }
        else
        {
            prev->next = node;
            prev = node;
        }
    }

    void remove_node_index(int index)
    {

        int counter = 0;
        Node *curr = head;
        if (index == 0)
        {
            head = head->next;
            delete curr;
            return;
        }
        // Would need to check for a base case that head wasn't actually NULL
        while (counter != index - 1)
        {
            curr = curr->next;
            counter++;
            if (curr == NULL)
            {
                std::cout << "Out of bounds" << std::endl;
                return;
            }
        }
        Node *temp = curr->next;
        curr->next = curr->next->next;
        delete temp;
    }

    void remove_node_value(int val, bool repeats)
    {
        // Would need to check for a base case that head wasn't actually NULL
        Node *curr = head;
        while (curr != NULL)
        {
            if (head->data == val)
            {
                Node *temp = head;
                head = head->next;
                delete temp;
                curr = head;
            }
            else if (curr->next == NULL)
            {
                return;
            }
            else if (curr->next->data == val)
            {
                Node *temp = curr->next;
                curr->next = curr->next->next;
                delete temp;
            }
            else
            {
                curr = curr->next;
            }

            if (!repeats)
                return;
        }
    }

    void print()
    {
        Node *curr = head;
        std::cout << std::endl;
        while (curr != NULL)
        {
            std::cout << curr->data << " ";
            curr = curr->next;
        }
    }
};

int main()
{
    LinkedList myList = LinkedList();
    myList.add_node(new Node(5));
    myList.add_node(new Node(7));
    myList.add_node(new Node(7));
    myList.add_node(new Node(8));
    myList.print();
    myList.remove_node_value(7, true);
    myList.remove_node_index(4);
    myList.print();
    return 0;
}
